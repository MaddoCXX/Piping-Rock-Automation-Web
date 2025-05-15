import { Page, BrowserContext, Locator } from "@playwright/test";

export class AddtoCart {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly CompletedTransaction: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.CompletedTransaction = this.page.getByText(
      "Congratulations! Your order has been confirmed!"
    );
  }

  async UserAddtoCart() {
    await this.page.locator(".choose > .nav > li > a").first().click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole("button", { name: "Add to cart" }).click();
  }

  async verifyAddtoCart() {
    await this.page.getByRole("button", { name: "Continue Shopping" }).click();
    await this.page.getByRole("link", { name: "Cart" }).click();
  }

  async ProceedCheckout() {
    await this.page.getByText("Proceed To Checkout").click();
    await this.page.getByRole("link", { name: "Place Order" }).click();
    await this.page.locator('input[name="name_on_card"]').fill("GeoffreyTest");
    await this.page
      .locator('input[name="card_number"]')
      .fill("4242 4242 4242 4242");
    await this.page.getByRole("textbox", { name: "ex." }).fill("123");
    await this.page.getByRole("textbox", { name: "MM" }).fill("12/34");
    await this.page.getByRole("textbox", { name: "YYYY" }).fill("2029");
    await this.page
      .getByRole("button", { name: "Pay and Confirm Order" })
      .click();
  }

  async VerifyCartCompleted() {
    await this.page.getByRole("link", { name: "Continue" }).click();
    await this.page.getByRole("link", { name: "Cart" }).click();
  }
}
