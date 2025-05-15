import { Page, BrowserContext } from "@playwright/test";

import dotenv from "dotenv";

dotenv.config();

export class LoginPage {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }
  async LoginUser() {
    const URL = process.env.url as string;
    const EMAIL = process.env.email as string;
    const PASSWORD = process.env.password as string;

    await this.page.goto(URL);
    await this.page.getByRole("link", { name: "Signup / Login" }).click();
    await this.page.getByPlaceholder("Email Address").nth(0).fill(EMAIL);
    await this.page.getByPlaceholder("Password").fill(PASSWORD);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
