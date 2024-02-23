import { certificateSelectors } from "../../../../constants/common";

// Seccion de Pagos
class CertificateScreen{
    get getCertificateSection() {
        return $(certificateSelectors.certificados);
    }

    async certificateSection(){
        await this.getCertificateSection.click();
    }
}

export default new CertificateScreen();
