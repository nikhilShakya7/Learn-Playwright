import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { invalidCredentials, validCredentials } from "./data/login.data";
import { LogoutPage } from "./pages/LogoutPage";
import { log } from "node:console";

test.describe("Login page test", () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Login page has all the fields", async ({ page }) => {
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  test("Login with valid credentials", async ({ page }) => {
    await loginPage.login(validCredentials.email, validCredentials.password);
    await expect(page).toHaveURL(/logged=true/);
  });

  test("Login with empty fields", async ({ page }) => {
    await loginPage.login("", "");
    await expect(page.getByText("Email is a required field")).toBeVisible();
    await expect(page.getByText("Password is a required field")).toBeVisible();
  });
  test("Login with invalid credentials", async ({ page }) => {
    await loginPage.login(
      invalidCredentials.invalidEmail,
      invalidCredentials.invalidPassword,
    );
    await expect(
      page.getByText("Your email and password both are invalid!"),
    ).toBeVisible();
  });

  test("Login with valid email and invalid password", async ({ page }) => {
    await loginPage.login(
      validCredentials.email,
      invalidCredentials.invalidPassword,
    );
    await expect(page.getByText("Your password is invalid!")).toBeVisible();
  });

  test("Login with invalid email and valid password", async ({ page }) => {
    await loginPage.login(
      invalidCredentials.invalidEmail,
      validCredentials.password,
    );
    await expect(page.getByText("Your email is invalid!")).toBeVisible();
  });
});

test("Logout page test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  await loginPage.open();
  await loginPage.login(validCredentials.email, validCredentials.password);
  await logoutPage.logout();
  await expect(page).toHaveURL("https://practice.qabrains.com/");
});
