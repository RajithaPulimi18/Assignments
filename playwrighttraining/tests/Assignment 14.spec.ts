import { test, expect } from '@playwright/test'
test('launch the application', async ({ page }) => {
    //launching the application
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    //maximize
    await page.setViewportSize({ width: 1920, height: 1080 });
    //verify application logo is displayed
    const logo = page.getByTitle("ParaBank");
    await expect(logo).toBeVisible();
    // Verify application caption displayed as "Experience the difference"
    const appCaption = page.getByText('Experience the difference');
    await expect(appCaption).toBeVisible();
    //Enter invalid username
    await page.locator('input[name="username"]').fill('rajitha');

    // Enter empty Password
    await page.locator('input[name="password"]').fill("");

    //Click on login button
    await page.getByRole('button', { name: 'Log In' }).click();
    //Verify the error message "Please enter a username and password."
    await page.locator('p.error').isVisible();
    await page.waitForTimeout(1000);
    // 8.Click on admin page link
    await page.getByRole('link', { name: 'Admin Page' }).click();

    // 9.select the option "soap" from dba mode radio button
    await page.locator('#accessMode3').click();
    // 10.Scroll to element dropdown
    const dropdown = await page.locator('#loanProvider');
    // await page.locator('//b[text()="Loan Provider:"]').scrollIntoViewIfNeeded();
    await page.mouse.wheel(0, 1000);
    // 11.Select the option web service from the dropdown
    await dropdown.selectOption({ label: 'JMS' });

    // 12.click on submit button
    await page.locator("//input[@value='Submit']").click();

    // 13.verify submission is successful by validating success message
    const saveMsg = await page.locator("//b[text()='Settings saved successfully.']").textContent();
    await expect(saveMsg).toBe('Settings saved successfully.');
    // 14.Click on services page link
    await page.locator('(//a[text()="About Us"]//following::li//a)[1]').click();
    // 15.wait for service page
    await page.getByText('Available Bookstore SOAP services').waitFor();
    // 16.Scroll down till bookstore services table
    await page.getByText('Bookstore services:').scrollIntoViewIfNeeded();
    // 17.get total rows of books store services table

    const list: string[] = await page
        .locator('(//span[text()="Bookstore services:"]//following::table[1])//tr')
        .allTextContents();
    console.log("rows:" + list.length);
    // 18.get total columns of books store services table

     const tablecolumns= await page.locator('(//span[text()="Bookstore services:"]//following::table[1])//tr//td').allTextContents();
       console.log("column:"+tablecolumns.length);
    // 19.Print table data (row wise and column wise data)

})