"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/(main)/components/ui/dialog";
import { Button } from "@/app/(main)/components/ui/button";
import { Input } from "@/app/(main)/components/ui/input";
import { Label } from "@/app/(main)/components/ui/label";
import { Textarea } from "@/app/(main)/components/ui/textarea";

interface EnrollNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollNowModal = ({ open, onOpenChange }: EnrollNowModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobRole: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          jobRole: "",
          comments: "",
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          onOpenChange(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[var(--card-background)] border border-[var(--highlight)]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[var(--card-heading)]">
            Enroll Now
          </DialogTitle>
          <DialogDescription className="text-[var(--card-paragraph)]">
            Fill out the form below to enroll in our bootcamp. We'll get back to you soon!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[var(--card-heading)]">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-[var(--bootcamp-card)] border-[var(--highlight)]/30 text-[var(--card-heading)]"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[var(--card-heading)]">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[var(--bootcamp-card)] border-[var(--highlight)]/30 text-[var(--card-heading)]"
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[var(--card-heading)]">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-[var(--bootcamp-card)] border-[var(--highlight)]/30 text-[var(--card-heading)]"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobRole" className="text-[var(--card-heading)]">
              Job Role <span className="text-red-500">*</span>
            </Label>
            <select
              id="jobRole"
              name="jobRole"
              required
              value={formData.jobRole}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-[var(--bootcamp-card)] border border-[var(--highlight)]/30 text-[var(--card-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
            >
              <option value="">Select your job role</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Founder/Executive">Founder/Executive</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments" className="text-[var(--card-heading)]">
              Comments (Optional)
            </Label>
            <Textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="bg-[var(--bootcamp-card)] border-[var(--highlight)]/30 text-[var(--card-heading)] min-h-[100px]"
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-3 rounded-md bg-green-500/20 border border-green-500/50 text-green-400 text-sm">
              Thank you! Your enrollment request has been submitted successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 rounded-md bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
              Something went wrong. Please try again later.
            </div>
          )}

          <DialogFooter className="flex justify-center items-center gap-3 p-2 md:p-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="secondary-button "
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="primary-button "
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollNowModal;
