import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Bookmark {
  id: string | number;
  url: string;
  title: string;
  favicon: string;
  summary: string;
  loading: boolean;
  error?: string;
}



const StartSavingLinks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const getFavicon = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    } catch {
      return "";
    }
  };
  const cleanSummary = (raw: string): string => {
  return raw
    .replace(/!\[.*?\]\(.*?\)/g, "") // remove markdown images
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // keep link text only
    .replace(/[#>*_`~-]+/g, "") // strip markdown chars
    .replace(/\n{2,}/g, "\n") // condense multiple line breaks
    .replace(/\s{2,}/g, " ") // condense multiple spaces
    .trim();
};

  const fetchSummary = async (url: string): Promise<string> => {
  try {
    const response = await fetch(`https://r.jina.ai/${url}`);
    if (!response.ok) throw new Error(`Jina API error: ${response.status}`);
    const summaryText = await response.text();
    return summaryText?.trim() || "No summary returned from Jina.";
  } catch (error) {
    console.error("Error fetching summary from Jina:", error);
    return "Failed to fetch summary. Please try again later.";
  }
};


  // Helper to truncate summary to 60 words
 const truncateSummary = (summary: string, maxChars = 400): string => {
  if (summary.length <= maxChars) return summary;

  const truncated = summary.slice(0, maxChars);
  const lastPeriod = truncated.lastIndexOf(".");
  if (lastPeriod > 100) {
    return truncated.slice(0, lastPeriod + 1) + " [...]";
  }
  return truncated.trim() + "...";
};

  const handleAddBookmark = async () => {
    setError("");
    if (!url.trim()) return;

    const bookmarkId = Date.now();
    const newBookmark: Bookmark = {
      id: bookmarkId,
      url,
      title: title || url,
      favicon: getFavicon(url),
      summary: "Loading summary...",
      loading: true,
    };

    setBookmarks((prev) => [newBookmark, ...prev]);
    setUrl("");
    setTitle("");

    try {
      const summary = await fetchSummary(url);
      setBookmarks((current) =>
        current.map((b) =>
          b.id === bookmarkId
            ? { ...b, summary, loading: false }
            : b
        )
      );
    } catch (err: any) {
      setBookmarks((current) =>
        current.map((b) =>
          b.id === bookmarkId
            ? { ...b, summary: "", loading: false, error: "Failed to fetch summary." }
            : b
        )
      );
      setError("Failed to fetch summary for the link.");
    }
  };

  const handleDeleteBookmark = (id: string | number) => {
    setBookmarks(current => current.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Start Saving Links</h1>
        
        {/* Add Bookmark Form */}
        <div className="w-full max-w-md space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="Paste your link here..."
              value={url}
              onChange={e => setUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddBookmark()}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Title (optional)</Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter a title for this link..."
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddBookmark()}
            />
          </div>
          
          <Button onClick={handleAddBookmark} className="w-full">
            Save Bookmark
          </Button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Bookmarks List */}
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Your Bookmarks</h2>
          {bookmarks.length === 0 ? (
            <div className="text-muted-foreground text-center">No bookmarks saved yet.</div>
          ) : (
            <div className="space-y-3">
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      {bookmark.favicon && (
                        <img 
                          src={bookmark.favicon} 
                          alt="favicon" 
                          className="w-6 h-6 mt-1"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium truncate">{bookmark.title}</h3>
                          <a 
                            href={bookmark.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <a 
                          href={bookmark.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary break-all"
                        >
                          {bookmark.url}
                        </a>
                        <div className="mt-2 text-sm">
                          {bookmark.loading ? (
                            <span className="text-muted-foreground">Generating summary...</span>
                          ) : bookmark.error ? (
                            <span className="text-red-500">Could not generate a summary for this link.</span>
                          ) : bookmark.summary.trim().startsWith('{"data":null') ? (
                            <span className="text-red-500">Summary not available for this link.</span>
                          ) : (
                            <span>{truncateSummary(bookmark.summary)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteBookmark(bookmark.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartSavingLinks;