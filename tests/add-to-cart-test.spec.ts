import { expect, test } from "../bridges/webfixtures";

test.describe("Test examination", async () => {
  test.beforeEach(async ({ mybase }) => {
    await mybase.LoginUser();
  });

  test("Test add to cart", async ({ myaddtoCart, page }) => {
    await myaddtoCart.UserAddtoCart();
    await myaddtoCart.verifyAddtoCart();
    await myaddtoCart.ProceedCheckout();

    //Assert successfull message
    await expect(
      page.getByText("Congratulations! Your order has been confirmed!")
    ).toContainText("Congratulations! Your order has been confirmed!");

    await myaddtoCart.VerifyCartCompleted();
    //Assert cart is empty
    await expect(page.getByText("Cart is empty!")).toContainText(
      "Cart is empty!"
    );
  });
});
