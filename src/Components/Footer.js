import React, { Component } from 'react'
import "./css/footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="content-wrap">
                        <h2>Reach Us!</h2>
                        <div class="contact-info">
                            <a href="mailto:email@example.com">email<i class="fas fa-at"></i>example.com</a>
                            <a href="http://yourwebsite.com" target="_blank">yourwebsite.com</a>
                            <a href="#" target="_blank">Twitter</a>
                            <a href="#" target="_blank">LinkedIn</a>
                            <a href="#" target="_blank">Facebook</a>
                            <a href="#" target="_blank">Facebook</a>
                        </div>
                        <p>Copyright<i class="fas fa-copyright"></i>2020 by MentorBoard Team</p>
                    </div>
                </footer>
            </div>
        )
    }
}
