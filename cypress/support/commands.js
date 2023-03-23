Cypress.Commands.add('dragAndDrop', (subject, target) => {
    Cypress.log({
        name: 'DRAGNDROP',
        message: `Dragging element ${subject} to ${target}`,
        consoleProps: () => {
            return {
                subject: subject,
                target: target
            };
        }
    });
    const BUTTON_INDEX = 0;
    const SLOPPY_CLICK_THRESHOLD = 10;
    cy.get(target)
        .first()
        .then($target => {
            let coordsDrop = $target[0].getBoundingClientRect();
            cy.get(subject)
                .first()
                .then(subject => {
                    const coordsDrag = subject[0].getBoundingClientRect();
                    cy.wrap(subject)
                        .trigger('mousedown', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x,
                            clientY: coordsDrag.y,
                            force: true
                        })
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
                            clientY: coordsDrag.y,
                            force: true
                        });
                    cy.get('body')
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrop.x,
                            clientY: coordsDrop.y,
                            force: true            
                        })
                        .trigger('mouseup');
                });
        });
});


Cypress.Commands.add("loginSalesforce", () => {

    let soapFile = "cypress/support/soapSalesforceStaging.xml"
    cy.log(soapFile)
    cy.readFile(soapFile).then(
      (requestBody) => {
        cy.request({
          method: "POST",
          url: "https://gafenergy--stg.sandbox.my.salesforce.com/services/Soap/u/56.0",
          headers: {
            SOAPAction: "abc",
            ["Content-Type"]: "text/xml"
          },
          body: requestBody
        }).then((response) => {
          const sessionID = Cypress.$(response.body).find("sessionId").text();
          cy.log(sessionID)
          cy.visit("https://gafenergy--stg.sandbox.my.salesforce.com/secur/frontdoor.jsp?sid=" + sessionID + "&allp=1&cshc=D000002cQwAD0000008aJb&display=page");
          cy.wait(7000)
        })
      });
  }
  );