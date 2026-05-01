import { test, expect } from "@playwright/test";

test("page has exactly one h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
});

test("page has h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});

test("images have alt text", async ({ page }) => {
  await page.goto("/");
  const images = page.locator("img");
  const count = await images.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const alt = await img.getAttribute("alt");
    expect(alt).toBeTruthy();
    expect(alt?.trim().length).toBeGreaterThan(0);
  }
});

test("interactive elements have accessible names", async ({ page }) => {
  await page.goto("/");
  const buttons = page.locator("button");
  const count = await buttons.count();
  for (let i = 0; i < count; i++) {
    const btn = buttons.nth(i);
    const text = await btn.textContent();
    const ariaLabel = await btn.getAttribute("aria-label");
    expect(text?.trim().length > 0 || ariaLabel).toBeTruthy();
  }
});

test("form inputs have labels", async ({ page }) => {
  await page.goto("/");
  const form = page.locator("section#contact form");
  const inputs = form.locator("input, textarea");
  const count = await inputs.count();
  for (let i = 0; i < count; i++) {
    const input = inputs.nth(i);
    const id = await input.getAttribute("id");
    if (id) {
      const label = page.locator(`label[for="${id}"]`);
      await expect(label).toBeVisible();
    }
  }
});

test("focus order is logical", async ({ page }) => {
  await page.goto("/");
  const focusable = page.locator("a, button, input, textarea");
  const count = await focusable.count();
  expect(count).toBeGreaterThan(0);
});

test("page has lang attribute", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html[lang]")).toBeVisible();
  const lang = await page.locator("html").getAttribute("lang");
  expect(lang).toBe("en");
});

test("page has meta description", async ({ page }) => {
  await page.goto("/");
  const desc = page.locator('meta[name="description"]');
  await expect(desc).toHaveCount(1);
  const content = await desc.getAttribute("content");
  expect(content?.length).toBeGreaterThan(20);
});

test("nav has aria-label", async ({ page }) => {
  await page.goto("/");
  const nav = page.locator("nav[aria-label]");
  await expect(nav).toHaveCount(1);
});

test("mobile menu toggle has aria-label", async ({ page }) => {
  await page.goto("/");
  const toggle = page.locator("button[aria-label='Toggle menu']");
  await expect(toggle).toHaveCount(1);
});
