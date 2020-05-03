export default class Translator{
    constructor(data) {
        this.id = data.id
        this.lang = data.lang
        this.main_title = data.main_title
        this.main_subtitle = data.main_subtitle
        this.destination_placeholder = data.destination_placeholder
        this.search = data.search
        this.start_date_description = data.start_date_description
        this.end_date_description = data.end_date_description
        this.select_date_placeholder = data.select_date_placeholder
        this.room_display = data.room_display
        this.room_description = data.room_description
        this.menu_login_button = data.menu_login_button
        this.menu_button = data.menu_button
        this.menu_list = data.menu_list
        this.footer_contact_description = data.footer_contact_description
        this.email_address = data.email_address
        this.sign_up = data.sign_up

    }
}