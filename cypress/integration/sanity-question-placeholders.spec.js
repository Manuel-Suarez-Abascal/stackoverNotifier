/* eslint-disable no-undef */
describe('Fetch Questions from Stackoverflow', () => {
    before(() => {
        cy.visit('/');
       
        cy.request({
            url: 'https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&tagged=javascript&site=stackoverflow&key=sRtlAYT6ufs8EkbTzH3hlQ(('
        }).then(res => {
            const responseObject = res.body.items[0];
            expect(res.status).to.be.eq(200);
        });
    })
    
    it('tag loads correctly on initial load', () => {
        cy.get('[data-test="question_tag_value"]')
            .should('exist')
            .and('be.visible')
            .then(tag => {
                const tagValue = tag.text();
                expect(tagValue).to.include('javascript');
            });
    });

    it('input field loads & contains right placeholder value', () => {
        cy.get('[data-test="question_tag_value_input"]')
            .should('exist')
            .and('be.visible')
            .then(inputField => {
                const inputFieldPlaceholder = inputField.attr('placeholder');
                expect(inputFieldPlaceholder).to.include('Enter a stackoverflow tag...');
            });
    })

    it('loads question & it\'s params', () => {
        cy.get('[data-test="question_title"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Question:');
        
        cy.get('[data-test="question_answered"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Answered');

        cy.get('[data-test="question_views"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Views');

        cy.get('[data-test="question_answers"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Answers');

        cy.get('[data-test="question_score"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Score');
    });

    it('loads href link to question', () => {
        cy.get('[data-test="question_link"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Go to answer question');
    });
}) 