
export default function Contact(props) {
    return (
        <div className="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card border-0 p-2 p-md-3 p-lg-5">
                    <div class="card-header text-center">
                        <h2>Hello!</h2>
                        <p>We'd love to hear from you</p>
                    </div>
                    <div class="card-body pt-0">
                        <form>
                            <div class="form-group">
                                <label for="nameInputIcon2">Your Name</label>
                                <div class="input-group mb-4">
                                    <div class="input-group-prepend"><span class="input-group-text"><span class="far fa-user-circle"></span></span></div>
                                    <input class="form-control" id="nameInputIcon2" placeholder="e.g. Bonnie Green" type="text" aria-label="contact name input" required="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="emailInputIcon2">Your Email</label>
                                <div class="input-group mb-4">
                                    <div class="input-group-prepend"><span class="input-group-text"><span class="far fa-envelope"></span></span></div>
                                    <input class="form-control" id="emailInputIcon2" placeholder="example@company.com" type="email" aria-label="contact email input" />
                                </div>
                            </div>
                            <div class="form-group"><label for="exampleFormControlTextarea2">Your Message</label> <textarea class="form-control" placeholder="Enter your message..." id="exampleFormControlTextarea2" rows="4"></textarea></div>
                            <button type="submit" class="btn btn-block rounded btn-secondary">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}