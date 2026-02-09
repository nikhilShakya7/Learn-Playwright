import { expect, test } from "@playwright/test";
import { Registration } from "./pages/Registration";
import {
  emptyRegistrationMessage,
  validCredentials,
} from "./data/register.data";

test.describe("Registration page test", () => {
  let registrationPage: Registration;
  test.beforeEach(async ({ page }) => {
    registrationPage = new Registration(page);
    await registrationPage.open();
  });

  test("Registration page has all the fields", async ({ page }) => {
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();

    await expect(page.getByRole("button", { name: "SIGNUP" })).toBeVisible();
    await expect(
      page.getByRole("combobox", { name: "Select Country" }),
    ).toBeVisible();
  });

  test("Registration with valid data", async ({ page }) => {
    await registrationPage.register(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      validCredentials.password,
      validCredentials.confirmPassword,
    );
    await expect(page).toHaveURL(/registered=true/);
  });

  test("Register with empty fields", async ({ page }) => {
    await registrationPage.register("", "", "", "", "", "");
    for (const message of Object.values(emptyRegistrationMessage)) {
      await expect(page.getByText(message)).toBeVisible();
    }
  });

  test("Register with different password", async ({ page }) => {
    await registrationPage.register(
      validCredentials.name,
      validCredentials.country,
      validCredentials.account,
      validCredentials.email,
      validCredentials.password,
      "sdfssdfsfddf",
    );

    await expect(page.getByText("Passwords must match")).toBeVisible;
  });
});
