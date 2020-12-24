/* eslint-disable no-undef */
describe("Fetch Questions from Stackoverflow", () => {
  before(() => {
    cy.visit("/");

    cy.request({
      url:
        "https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&tagged=javascript&site=stackoverflow&key=sRtlAYT6ufs8EkbTzH3hlQ(("
    }).then(res => {
      expect(res.status).to.be.eq(200);

      const questionObject = res.body.items[0];

      const { title, is_answered, view_count, score } = questionObject;

      cy.log(`Asserting the fetched response object:
                Title: ${title},
                Answered: ${is_answered},
                Views: ${view_count},
                Score: ${score}
            `);

      cy.get('[data-test="question_title_value"]').should(
        "contain",
        `${title}`
      );
      cy.get('[data-test="question_status_value"]').should(
        "contain",
        `${is_answered}`
      );
      cy.get('[data-test="question_views_value"]').should(
        "contain",
        `${view_count}`
      );
      cy.get('[data-test="question_score_value"]').should(
        "contain",
        `${score}`
      );
    });
  });

  it("tag loads correctly on initial load", () => {
    cy.get('[data-test="tag_value"]')
      .should("exist")
      .and("be.visible")
      .then(tag => {
        const tagValue = tag.text();
        expect(tagValue).to.include("javascript");
      });
  });

  it("input field loads & contains right placeholder value", () => {
    cy.get('[data-test="question_input"]')
      .should("exist")
      .and("be.visible")
      .then(inputField => {
        const inputFieldPlaceholder = inputField.attr("placeholder");
        expect(inputFieldPlaceholder).to.include(
          "Enter a stackoverflow tag..."
        );
      });
  });

  it("loads question & it's params", () => {
    cy.get('[data-test="question_title"]')
      .should("exist")
      .and("be.visible")
      .and("contain", "Question:");

    cy.get('[data-test="answered"]')
      .should("exist")
      .and("be.visible")
      .and("contain", "Answered");

    cy.get('[data-test="views"]')
      .should("exist")
      .and("be.visible")
      .and("contain", "Views");

    cy.get('[data-test="answers"]')
      .should("exist")
      .and("be.visible")
      .and("contain", "Answers");

    cy.get('[data-test="score"]')
      .should("exist")
      .and("be.visible")
      .and("contain", "Score");
  });

  it("loads href link to question", () => {
    cy.get('[data-test="question_link"]')
      .should("exist")
      .and("be.visible")
      .and("contain", "Go to answer the question");
  });
});
