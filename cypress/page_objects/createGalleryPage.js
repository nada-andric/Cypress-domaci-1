class CreateGallery {

    get createGalleryButton () {
        return cy.get('a[href="/create"]');
    }


    get titleInput () {
        return cy.get('input[id="title"]');
    }

    get descriptionInput () {
        return cy.get('input[id="description"]');
    }

    get imageInput() {
        return cy.get ('input[type="url"]');
    }

    get submitButton () {
        return cy.contains('Submit');
    }

    get addImages () {
        return cy.contains ('Add image')
    }

    get cancelButton () {
        return cy.contains ('Cancel')
    }

}

export const createGalleryPage = new CreateGallery();