export default class AboutUs {
    constructor() {
        document.title = 'About Us';
    }

    async getHtml() {
        return `
            <p class="text">
                Hello, we are students from 42Yerevan programming school.
            </p>
        `;
    }

    async getModalView() {
        return `
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-2 fw-bold" id="staticBackdropLabel">About Us</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${await this.getHtml()}          
              </div>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
        
        `;
    }
}