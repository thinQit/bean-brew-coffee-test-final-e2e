import * as React from "react";

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  return (
    <form
      className={className}
      style={{
        display: "grid",
        gap: "0.75rem",
        padding: "1rem",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 12,
        maxWidth: 640,
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label style={{ display: "grid", gap: 6 }}>
        <span>Name</span>
        <input name="name" required style={{ padding: "0.6rem 0.75rem" }} />
      </label>
      <label style={{ display: "grid", gap: 6 }}>
        <span>Email</span>
        <input name="email" type="email" required style={{ padding: "0.6rem 0.75rem" }} />
      </label>
      <label style={{ display: "grid", gap: 6 }}>
        <span>Message</span>
        <textarea name="message" required rows={5} style={{ padding: "0.6rem 0.75rem" }} />
      </label>
      <button
        type="submit"
        style={{
          padding: "0.7rem 0.9rem",
          borderRadius: 10,
          border: "1px solid rgba(0,0,0,0.15)",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
}
