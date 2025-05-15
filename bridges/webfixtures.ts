import { Page, test as aetest, expect } from "@playwright/test";
import { LoginPage } from "../commons/base";
import { AddtoCart } from "../action-pages/add-to-cart";

type ExcerciseFixture = {
  mybase: LoginPage;
  myaddtoCart: AddtoCart;
};

export const test = aetest.extend<ExcerciseFixture>({
  mybase: async ({ page, context }, use) => {
    const getmyBase = new LoginPage(page, context);
    await use(getmyBase);
  },

  myaddtoCart: async ({ page, context }, use) => {
    const getmyaddtoCart = new AddtoCart(page, context);
    await use(getmyaddtoCart);
  },
});

export { expect };
