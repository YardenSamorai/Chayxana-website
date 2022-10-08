export class Email {

    user_id;
    template_id;
    service_id;
    send_ep;

    constructor() {
        this.setConfig();
    }

    /**
     * Setting config
     */
    setConfig() {
        this.user_id = process.env.REACT_APP_EMAIL_USER_ID;
        this.service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
        this.template_id = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
        this.send_ep = process.env.REACT_APP_EMAIL_SEND_EP;
    }

    /**
     * Send Email through
     */
    sendEmail(data) {
        const finalData = {
            user_id: this.user_id,
            template_id: this.template_id,
            service_id: this.service_id,
            template_params: { ...data }
        }

        return fetch(this.send_ep, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalData)
        });
    }

}