import { useForm } from "react-hook-form";
import Button from "../components/Button";

type FormData = {
  name: string;
  email: string;
  message: string;
};
type Props = {
  compact?: boolean;
};

import { useState } from "react";

export default function ContactForm({ compact = false }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMsg("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`$${
        compact ? "space-y-4 p-4 text-sm" : "space-y-6 p-6"
      } bg-white dark:bg-[#2f2f2f] rounded-xl shadow-md`}
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-softwhite dark:bg-charcoal dark:text-white"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-softwhite dark:bg-charcoal dark:text-white"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          rows={5}
          {...register("message", { required: "Message is required" })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-softwhite dark:bg-charcoal dark:text-white"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="sage" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-green-600 font-medium">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">{errorMsg}</p>
      )}
    </form>
  );
}
