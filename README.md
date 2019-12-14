## My cool form project
Tech test for Springload.

This was a really great tech test - thank you to the people who created it! I had heaps of fun. I probably spent about 4.5 hours on this.

Also I would love any and all feedback you have for me.

### How to get the project started
* Pull down repo.
* Run `npm install` (This will install all of the depedencies).
* To start the server run `ng serve`.
* Visit [localhost:4200](https://localhost:4200/).

### How to run the test suite
* Run `ng test` This will open a new browser with Karma.

### Personal considerations while I was writing this.
#### Technology used:
Angular and Reactive Forms
* My most comfortable framework.
* Really easy to create an application using `Angular CLI`.
* I took this as a learning opportunity for myself.
* Reactive Forms was both a good choice and a bad choice
> * They are quite heavy, and hold a lot of room for developing and personalised control. I used this to my advantage by creating a custom validator however because the form is quite simple I could have used something better suited to the job.
> * Positive is if this application was to grow and be form heavy we would have created the base for this.
> * As I work in Angular I took this as a personal learning opportunity to play around with Reactive Forms.

SASS
* I know Springload uses css preprocessors
* I find it easier to read css when things like `:active`, `:hover` etc are nested in the appropriate class's
* I re formatted the CSS so that we are not creating global styles for all inputs etc - Global CSS is always a bad smell for me.
* I also used the BEM naming conventions because I also know ya'll use BEM.

Angular probably works as a disadvantage because I know that Springload uses React and I am sure you would have loved to have seen some React code. 

The CSS is not as nice as I would have liked. It is however cross-browser compatible and I do believe it would even work on IE 😅😅

#### Accessibility
* I changed some of the semantic markup up the HTML as some of it was wrong.
> * There was initially no H2
> * A form is not a `<p>`
> * I only showed the `type_of_tiger` if the tiger was selected
> * Added some helper text with the password and animal checkbox array
> * Put a disabled state on the button

#### Testing
* I tested the custom validator
* If I would spend some more time on it I would test the form itself.

#### Progressive Enhancement
I kept it all browser agnostic and did not add any browser specific ehancements.

#### Browser support
All browsers should be consistent. I have done manual testing on all mac browsers and have not used any CSS that is not supported.

#### Tooling
`Angular CLI` - Amazing tool for quick set up of an application.
