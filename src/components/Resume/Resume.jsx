import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import pdf from "../../Assets/Resume/cv.pdf";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const docs = [
    { uri: require("../../Assets/Resume/cv.pdf") }, // Local File
  ];

  const [activeDocument, setActiveDocument] = useState(docs[0]);

  const handleDocumentChange = (document) => {
    setActiveDocument(document);
  };

  return (
    <div id="resume" className="resume-section">
      {/* <Container fluid className="resume-section">
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
  
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page  pageIndex={0} pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />

            </Document>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container> */}

      <DocViewer
        documents={docs}
        activeDocument={activeDocument}
        onDocumentChange={handleDocumentChange}
        pluginRenderers={DocViewerRenderers}

        config={{
          header: {
            disableHeader: true,
            disableFileName: false,
            retainURLParams: false,
          },
          csvDelimiter: ",", // "," as default,
          pdfZoom: {
            defaultZoom: 0.9, // 1 as default,
            zoomJump: 0.1, // 0.1 as default,
          },
          pdfVerticalScrollByDefault: true, // false as default
        }}
      />
    </div>
  );
};

export default Resume;
