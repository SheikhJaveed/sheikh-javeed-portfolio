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
    expect(screen.getByRole("img", { name: /profile illustration/i })).toHaveAttribute(
      "src",
      "/profile-avatar.jpeg",
    );
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

    expect(screen.getByText("run agent trace --quick")).toBeInTheDocument();
    expect(screen.getByText("init.ai_engineer()")).toBeInTheDocument();
    expect(screen.getByText("hydrate.memory()")).toBeInTheDocument();
    expect(screen.getByText("sync.tool_calls()")).toBeInTheDocument();
    expect(screen.getByText("scan.ai_projects()")).toBeInTheDocument();
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

  it("moves the active navbar marker when a section link is selected", async () => {
    const user = userEvent.setup();
    render(<App />);

    const homeLink = screen.getByRole("link", { name: /Home/i });
    const projectsLink = screen.getByRole("link", { name: /Projects/i });

    expect(homeLink).toHaveAttribute("aria-current", "page");

    await user.click(projectsLink);

    expect(projectsLink).toHaveAttribute("aria-current", "page");
    expect(homeLink).not.toHaveAttribute("aria-current");
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
    expect(screen.queryByRole("link", { name: /Resume/i })).not.toBeInTheDocument();
  });
});
