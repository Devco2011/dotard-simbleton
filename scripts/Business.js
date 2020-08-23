export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="businessName">${businessObject.companyName}</h2>
            <div class="businessaddress">${businessObject.addressFullStreet} <br> ${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                
            </div>
        </section>
    `
}
