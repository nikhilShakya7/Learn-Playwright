import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class Registration extends basePage {
  readonly userName: Locator;
  readonly userCountry: Locator;
  readonly userAccount: Locator;
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly userConfirmPassword: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signupButton = page.getByRole("button", { name: "SIGNUP" });
    this.userName = page.getByLabel("Name");
    this.userCountry = page.getByRole("combobox", { name: "Select Country" });
    this.userAccount = page.getByRole("combobox", { name: "Account Type" });
    this.userEmail = page.getByLabel("Email");
    this.userPassword = page.locator("#password");
    this.userConfirmPassword = page.locator("#confirm_password");
  }

  async open() {
    await this.page.goto("https://practice.qabrains.com/registration");
  }

  async register(
    name: string,
    country: string,
    account: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    await this.userName.fill(name);
    await this.userCountry.selectOption(country);
    await this.userAccount.selectOption(account);
    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.userConfirmPassword.fill(confirmPassword);
    await this.signupButton.click();
  }
}
