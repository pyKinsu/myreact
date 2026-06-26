import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <img
        src="/404.png"
        alt="Page not found"
        style={{ width: "100%", maxWidth: "400px", height: "auto", marginBottom: "24px" }}
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "8px" }}>Page Not Found</h1>
      <p style={{ color: "#ddd", marginBottom: "24px", maxWidth: "400px" }}>
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 24px",
          background: "#0070f3",
          color: "white",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
