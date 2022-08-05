import { COLOR } from "../../src/constants/style";

const getIframeDocument = () =>
    cy
        .get("#storybook-preview-iframe")
        .its("0.contentDocument")
        .should("exist");

const getIframeBody = () =>
    getIframeDocument().its("body").should("not.be.undefined").then(cy.wrap);

describe("Storybook", () => {
    it("visit storybook toasts", () => {
        cy.visit("/");
        cy.get("#toast--info");
        getIframeBody()
            .find("#toast-item")
            .should("contain.text", "InfoInfo description")
            .should("have.css", "background-color", `${COLOR.info}`);

        cy.get("#toast--success").click();
        getIframeBody()
            .find("#toast-item")
            .should("contain.text", "SuccessSuccess description")
            .should("have.css", "background-color", `${COLOR.success}`);

        cy.get("#toast--warning").click();
        getIframeBody()
            .find("#toast-item")
            .should("contain.text", "WarningWarning description")
            .should("have.css", "background-color", `${COLOR.warning}`);

        cy.get("#toast--error").click();
        getIframeBody()
            .find("#toast-item")
            .should("contain.text", "ErrorError description")
            .should("have.css", "background-color", `${COLOR.error}`);
    });

    it("visit storybook toasts container", () => {
        cy.visit("/toast-container--example");

        cy.get("#toast-container--example");
        getIframeBody()
            .find("#show-btn")
            .should("contain.text", "Show Toast")
            .should("have.css", "background-color", `${COLOR.info}`)
            .click()
            .click()
            .click();
        getIframeBody()
            .find("#toast-list")
            .children()
            .should("have.length", 3)
            .first()
            .should("contain.text", "Success operationDescription");
    });
});
