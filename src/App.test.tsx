import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Portfolio app", () => {
  it("presents Sheikh Mannan Javeed as an AI engineer", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Sheikh Mannan Javeed/i })).toBeInTheDocument();
    expect(screen.getAllByText(/AI Engineer/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/agentic systems/i)).toBeInTheDocument();
    expect(screen.getByText(/BaseThesis Labs/i)).toBeInTheDocument();
  });

  it("renders the core single-page sections", () => {
    render(<App />);

    expect(screen.getByRole("navigation", { name: /Portfolio sections/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /Experience/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /Selected Work/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /Contact/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /AI Engineering/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /^Stack$/i })).not.toBeInTheDocument();
  });

  it("keeps the simplified footer and removes the view counter", () => {
    render(<App />);

    expect(screen.getByText(/system compiled \/ Sheikh Mannan Javeed \/ 2026/i)).toBeInTheDocument();
    expect(screen.queryByText("3028")).not.toBeInTheDocument();
  });

  it("renders the custom system trace without signals verification", () => {
    render(<App />);

    expect(screen.getByText("boot.profile()")).toBeInTheDocument();
    expect(screen.getByText("load.experience()")).toBeInTheDocument();
    expect(screen.getByText("scan.projects()")).toBeInTheDocument();
    expect(screen.getByText("open.channel()")).toBeInTheDocument();
    expect(screen.queryByText("verify.signals()")).not.toBeInTheDocument();
  });

  it("toggles between dark and light theme", async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole("button", { name: /switch to light theme/i });
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    await user.click(toggle);

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(screen.getByRole("button", { name: /switch to dark theme/i })).toBeInTheDocument();
  });

  it("exposes project and contact links", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /Agentic SRE/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/SheikhJaveed",
    );
    expect(screen.getByRole("link", { name: /Email/i })).toHaveAttribute(
      "href",
      "mailto:smjaveed94@gmail.com",
    );
  });
});
