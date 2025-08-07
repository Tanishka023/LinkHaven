import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    features: ["Basic link saving", "Limited summaries", "Community support"],
  },
  {
    title: "Pro",
    monthlyPrice: "$9",
    yearlyPrice: "$90",
    features: ["Unlimited links", "Advanced summaries", "Priority support"],
  },
  {
    title: "Premium",
    monthlyPrice: "$19",
    yearlyPrice: "$190",
    features: ["All Pro features", "AI-enhanced recommendations", "Early access to features"],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
      <div className="flex justify-center gap-4 mb-10">
        <Button
          variant={billingCycle === "monthly" ? "default" : "outline"}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </Button>
        <Button
          variant={billingCycle === "yearly" ? "default" : "outline"}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly (Save 20%)
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-3xl font-bold mb-4">
              {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              <span className="text-base font-medium text-gray-500">
                /{billingCycle}
              </span>
            </p>
            <ul className="mb-6 space-y-2 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-700">
                  • {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">Choose {plan.title}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
