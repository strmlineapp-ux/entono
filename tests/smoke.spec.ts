import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("h1")).toContainText("ENTONO");
});

test("nav logo links to hero", async ({ page }) => {
  await page.goto("/");
  const logo = page.locator("a", { hasText: "ENTONO" }).first();
  await logo.click();
  await expect(page.locator("section#hero")).toBeVisible({ timeout: 5000 });
});

test("desktop nav links scroll to sections", async ({ page }) => {
  await page.goto("/");
  const links = page.locator("nav a").filter({ hasNot: page.locator("a", { hasText: "ENTONO" }) });
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    const href = await link.getAttribute("href");
    if (href?.startsWith("#")) {
      const sectionId = href.replace("#", "");
      await link.click();
      await expect(page.locator(`section#${sectionId}`)).toBeVisible({ timeout: 5000 });
    }
  }
});

test("collections section renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("section#collections h2")).toContainText("The Archive");
  const cards = page.locator("section#collections .group");
  await expect(cards).toHaveCount(3);
});

test("lookbook section renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("section#lookbook h2")).toContainText("FW25");
  const lookItems = page.locator("section#lookbook [class*='cursor-pointer']");
  const count = await lookItems.count();
  expect(count).toBe(5);
  await expect(lookItems.first()).toBeVisible();
});

test("about section renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("section#about h2")).toContainText("The depth");
  await expect(page.locator("section#about", { hasText: "2019" })).toBeVisible();
});

test("contact section renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("section#contact h2")).toContainText("connect");
  const form = page.locator("section#contact form");
  await expect(form).toBeVisible();
  const inputs = form.locator("input[required], textarea[required]");
  await expect(inputs).toHaveCount(3);
});

test("contact form submits without crash", async ({ page }) => {
  await page.goto("/");
  const form = page.locator("section#contact form");
  await form.locator("#name").fill("Test User");
  await form.locator("#email").fill("test@example.com");
  await form.locator("#message").fill("Hello");
  await form.locator("button[type=submit]").click();
  await expect(page.locator("section#contact", { hasText: "Thank you" })).toBeVisible({ timeout: 5000 });
});

test("footer renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("footer")).toBeVisible();
  await expect(page.locator("footer", { hasText: "ENTONO" })).toBeVisible();
  await expect(page.locator("footer", { hasText: "All rights reserved" })).toBeVisible();
});

test("images are loaded", async ({ page }) => {
  await page.goto("/");
  const images = page.locator("img");
  const count = await images.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const complete = await img.evaluate((el: any) => el.complete);
    expect(complete).toBe(true);
  }
});
