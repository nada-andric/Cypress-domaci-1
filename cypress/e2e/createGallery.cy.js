import { loginPage } from "../page_objects/loginPage";
import { createGalleryPage } from "../page_objects/createGalleryPage"


describe('Create Gallery', () => {
    beforeEach(() => {
      cy.visit('/')
      loginPage.loginButton.click()
      loginPage.login('mejl@mejl.mejl', '11111111' )
      createGalleryPage.createGalleryButton.click ()

    })

    it('Successful created gallery', () => {
      createGalleryPage.titleInput.type('Oblak')
      createGalleryPage.descriptionInput.type('plav')
      createGalleryPage.imageInput.type('https://ddl.rs/wp-content/uploads/2018/07/oblaci-pixabay-2.jpg')
      createGalleryPage.submitButton.click()
    })

    it('Create gallery title with minimum characters', () => {
      createGalleryPage.titleInput.type('Ob')    
      createGalleryPage.descriptionInput.type('plav')
      createGalleryPage.imageInput.type('https://ddl.rs/wp-content/uploads/2018/07/oblaci-pixabay-2.jpg')
      createGalleryPage.submitButton.click()
    })

    it('Create gallery title with maximum characters', () => {
      createGalleryPage.titleInput.type('Cibo ex harum manu, nemore oratoribus putas specie videamus. Amentur aptius arte aspernatur conclusionemque maiores populo potitur quaestionem rogatiuncula sentio theophrasti triari vulgo. Accommodare artifex claudicare cupiditates dicitis fugiendam hominem inermis latinam maximos quidem seiungi splendide statuerunt tradere. ')    
      createGalleryPage.descriptionInput.type('plav')
      createGalleryPage.imageInput.type('https://ddl.rs/wp-content/uploads/2018/07/oblaci-pixabay-2.jpg')
      createGalleryPage.submitButton.click()
    })

    it('Create gallery with description 100 characters', () => {
      createGalleryPage.titleInput.type('Oblak')    
      createGalleryPage.descriptionInput.type('Intellegimus parabilis saluti sequitur si voluptas. Aequitate audiam augue debet habitant, intellegamus inventore labores leviora nostra propositum quieti reperiri reprehensa teneam. Fugiendus impetu metum montes procedat. Accessio defenditur laetamur modo successerit. Abest adquiescere aliquam deterritum, doctus fatendum homine iaculis illi manum morbos placeat scelerisque. Consentinis exercendi finitum indoctis senectus. ')
      createGalleryPage.imageInput.type('https://ddl.rs/wp-content/uploads/2018/07/oblaci-pixabay-2.jpg')
      createGalleryPage.submitButton.click()
    })

    it('Create gallery without required failed', () => {
      createGalleryPage.submitButton.click()
    })

    it('Create gallery with invalid URL (string)', () => {
      createGalleryPage.titleInput.type('Oblak')    
      createGalleryPage.descriptionInput.type('plav')
      createGalleryPage.imageInput.type('bla bla')
      createGalleryPage.submitButton.click()
    })

    it('Create gallery with one image URL empty', () => {
      createGalleryPage.titleInput.type('Oblak')    
      createGalleryPage.descriptionInput.type('plav')
      createGalleryPage.imageInput.type('https://ddl.rs/wp-content/uploads/2018/07/oblaci-pixabay-2.jpg')
      createGalleryPage.addImages.click()
      createGalleryPage.submitButton.click()
    })


})