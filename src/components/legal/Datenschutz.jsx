import React, { useEffect } from 'react';
import LegalHeader from './LegalHeader.jsx';
import Footer from '../footer/Footer.jsx';
import './legal.css';

/**
 * Datenschutz - Dedicated Privacy Policy (Datenschutzerklärung) page for Clemmo.
 * Full 6-section text matching the provided prodestek GmbH document.
 */
export default function Datenschutz({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Datenschutzerklärung | Clemmo';
    return () => {
      document.title = 'Clemmo | Individuelle Baustein-Sets für Ihr Unternehmen';
    };
  }, []);

  return (
    <div className="legal-page-root">
      <LegalHeader currentPage="datenschutz" onNavigate={onNavigate} />

      <main className="legal-main-container">
        {/* Breadcrumb Navigation */}
        <nav className="legal-breadcrumbs" aria-label="Breadcrumb">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
              else window.location.hash = '';
            }}
            className="legal-breadcrumb-link"
          >
            Startseite
          </a>
          <span aria-hidden="true">/</span>
          <span className="legal-breadcrumb-current">Datenschutzerklärung</span>
        </nav>

        {/* Hero Header */}
        <header className="legal-hero-header">
          <div className="legal-eyebrow">
            <span className="legal-eyebrow-rule" aria-hidden="true" />
            <span className="legal-eyebrow-text">DSGVO & DATENSCHUTZ</span>
          </div>
          <h1 className="legal-title">Datenschutzerklärung</h1>
          <p className="legal-subtitle">Clemmo – eine Marke der prodestek GmbH</p>
        </header>

        {/* Legal Body Sections */}
        <div className="legal-content-body">
          {/* SECTION 1 */}
          <section className="legal-card" aria-labelledby="sec-1">
            <h2 id="sec-1" className="legal-section-heading">
              <span className="legal-section-num">1.</span> Datenschutz auf einen Blick
            </h2>

            <h3 className="legal-subsection-heading">Allgemeine Hinweise</h3>
            <p className="legal-paragraph">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="legal-subsection-heading">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p className="legal-paragraph">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber, die prodestek GmbH (Marke: Clemmo). Die Kontaktdaten finden Sie im Abschnitt „Hinweis zur verantwortlichen Stelle“ dieser Datenschutzerklärung.
            </p>

            <h3 className="legal-subsection-heading">Wie erfassen wir Ihre Daten?</h3>
            <p className="legal-paragraph">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch eine Anfrage per E-Mail. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="legal-subsection-heading">Wofür nutzen wir Ihre Daten?</h3>
            <p className="legal-paragraph">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="legal-subsection-heading">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p className="legal-paragraph">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="legal-paragraph">
              Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
            </p>

            <h3 className="legal-subsection-heading">Analyse-Tools und Tools von Drittanbietern</h3>
            <p className="legal-paragraph">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
            </p>
            <p className="legal-paragraph">
              Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="legal-card" aria-labelledby="sec-2">
            <h2 id="sec-2" className="legal-section-heading">
              <span className="legal-section-num">2.</span> Hosting und Content Delivery Networks (CDN)
            </h2>

            <h3 className="legal-subsection-heading">Externes Hosting</h3>
            <p className="legal-paragraph">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="legal-paragraph">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="legal-paragraph">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>

            <h3 className="legal-subsection-heading">Abschluss eines Vertrages über Auftragsverarbeitung</h3>
            <p className="legal-paragraph">
              Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="legal-card" aria-labelledby="sec-3">
            <h2 id="sec-3" className="legal-section-heading">
              <span className="legal-section-num">3.</span> Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="legal-subsection-heading">Datenschutz</h3>
            <p className="legal-paragraph">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="legal-paragraph">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="legal-paragraph">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="legal-subsection-heading">Hinweis zur verantwortlichen Stelle</h3>
            <p className="legal-paragraph">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="legal-highlight-box">
              <strong>prodestek GmbH</strong> (Clemmo ist eine Marke der prodestek GmbH)<br />
              Rosenhofweg 10b<br />
              76149 Karlsruhe<br />
              Vertreten durch den Geschäftsführer Holger Zöhrens<br />
              Telefon: +49 721 94300077<br />
              E-Mail: <a href="mailto:info@clemmo.de" className="legal-link">info@clemmo.de</a>
            </div>

            <h3 className="legal-subsection-heading">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="legal-paragraph">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="legal-subsection-heading">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <div className="legal-highlight-box" style={{ textTransform: 'none', lineHeight: 1.65 }}>
              <p style={{ marginBottom: '0.8rem' }}>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
              </p>
              <p style={{ marginBottom: '0.8rem' }}>
                WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p style={{ margin: 0 }}>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
              </p>
            </div>

            <h3 className="legal-subsection-heading">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="legal-paragraph">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="legal-subsection-heading">Recht auf Datenübertragbarkeit</h3>
            <p className="legal-paragraph">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="legal-subsection-heading">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="legal-paragraph">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="legal-paragraph">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h3 className="legal-subsection-heading">Auskunft, Löschung und Berichtigung</h3>
            <p className="legal-paragraph">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>

            <h3 className="legal-subsection-heading">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="legal-paragraph">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="legal-list">
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            </ul>
            <p className="legal-paragraph">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3 className="legal-subsection-heading">Widerspruch gegen Werbe-E-Mails</h3>
            <p className="legal-paragraph">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="legal-card" aria-labelledby="sec-4">
            <h2 id="sec-4" className="legal-section-heading">
              <span className="legal-section-num">4.</span> Datenerfassung auf dieser Website
            </h2>

            <h3 className="legal-subsection-heading">Cookies</h3>
            <p className="legal-paragraph">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese selbst löschen oder eine automatische Lösung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="legal-paragraph">
              Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="legal-paragraph">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
            </p>
            <p className="legal-paragraph">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
            </p>
            <p className="legal-paragraph">
              Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="legal-paragraph">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="legal-paragraph">
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
            </p>

            <h3 className="legal-subsection-heading">Server-Log-Dateien</h3>
            <p className="legal-paragraph">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="legal-list">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="legal-paragraph">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="legal-paragraph">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            <h3 className="legal-subsection-heading">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="legal-paragraph">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="legal-paragraph">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
            </p>
            <p className="legal-paragraph">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          {/* SECTION 5 */}
          <section className="legal-card" aria-labelledby="sec-5">
            <h2 id="sec-5" className="legal-section-heading">
              <span className="legal-section-num">5.</span> Analyse-Tools
            </h2>

            <h3 className="legal-subsection-heading">WP Statistics</h3>
            <p className="legal-paragraph">
              Diese Website nutzt das WordPress-Plugin WP Statistics, um Besucherzugriffe auszuwerten. Anbieter ist Veronalabs (<a href="https://wp-statistics.com" target="_blank" rel="noopener noreferrer" className="legal-link">https://wp-statistics.com</a>).
            </p>
            <p className="legal-paragraph">
              Mit Hilfe von WP Statistics können wir anonymisiert analysieren, wie viele Besucher unsere Website aufrufen und welche Inhalte wie oft angesehen werden. WP Statistics verarbeitet dafür keine Cookies und erstellt keine Nutzerprofile. Alle erfassten Daten werden ausschließlich auf unserem Webserver gespeichert.
            </p>
            <p className="legal-paragraph">
              Die IP-Adressen werden dabei anonymisiert gespeichert, sodass ein Rückschluss auf einzelne Personen nicht möglich ist. Eine Weitergabe der Daten an Dritte findet nicht statt.
            </p>
            <p className="legal-paragraph">
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der anonymisierten Analyse des Nutzerverhaltens, um unser Webangebot zu optimieren.
            </p>
          </section>

          {/* SECTION 6 */}
          <section className="legal-card" aria-labelledby="sec-6">
            <h2 id="sec-6" className="legal-section-heading">
              <span className="legal-section-num">6.</span> Plugins und Tools
            </h2>

            <h3 className="legal-subsection-heading">Google Maps</h3>
            <p className="legal-paragraph">
              Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="legal-paragraph">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
            </p>
            <p className="legal-paragraph">
              Google Maps wird nur geladen, wenn Sie hierzu Ihre Einwilligung erteilt haben. Rechtsgrundlage ist in diesem Fall Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="legal-paragraph">
              Die Datenübertragung in die USA wird auf den EU-US Data Privacy Framework gestützt, unter dem Google zertifiziert ist.
            </p>
            <p className="legal-paragraph">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{' '}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="legal-link">
                https://policies.google.com/privacy?hl=de
              </a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer with credit */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
