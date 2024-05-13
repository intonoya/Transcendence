export default class StartModal {
    constructor() {
        document.title = 'Ping Pong';
    }

    async getHtml() {
        return `
            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title fw-bold" id="exampleModalLabel">Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="text_modal">
                                In-game management instructions:
                            </p>
                            <p class="text_modal">
                                <span class="fw-bold" style="color: #8BA1F6;">Move left (↑):</span> Press the <span class="fw-bold" style="color: #8BA1F6;">W</span> key<br>
                                <span class="fw-bold" style="color: #8BA1F6;">Move right (↓):</span> Press the <span class="fw-bold" style="color: #8BA1F6;">S</span> key<br>
                                <span class="fw-bold" style="color: #8BA1F6;">Strong hit:</span> Press the <span class="fw-bold" style="color: #8BA1F6;">A</span> key<br>
                            </p>
                            
                            <p class="text_modal">
                                You can also play with other Players:
                            </p>
                            <p class="text_modal">
                                <span class="fw-bold" style="color: #8BA1F6;">Move left (↑):</span> Press the <span class="fw-bold" style="color: #8BA1F6;">I</span> key<br>
                                <span class="fw-bold" style="color: #8BA1F6;">Move right (↓):</span> Press the <span class="fw-bold" style="color: #8BA1F6;">K</span> key<br>
                                <span class="fw-bold" style="color: #8BA1F6;">Strong hit:</span> Press the <span class="fw-bold" style="color: #8BA1F6;">O</span> key<br>
                            </p>


                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}