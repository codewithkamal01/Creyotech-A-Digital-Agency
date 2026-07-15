import base64
import os
from typing import List, Optional
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build


SCOPES = [
    "https://www.googleapis.com/auth/gmail.send"
]


class GmailService:

    def __init__(self):
        self.service = self._authenticate()

    # Authenticates the Gmail API
    def _authenticate(self):

        creds = None

        if os.path.exists("token.json"):
            creds = Credentials.from_authorized_user_file(
                "token.json",
                SCOPES,
            )

        if not creds or not creds.valid:

            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())

            else:

                flow = InstalledAppFlow.from_client_secrets_file(
                    "credentials/credentials.json",
                    SCOPES,
                )

                creds = flow.run_local_server(port=0)

            with open("token.json", "w") as token:
                token.write(creds.to_json())

        return build(
            "gmail",
            "v1",
            credentials=creds,
        )

    # Sends an HTML email with optional attachments
    def send_email(
        self,
        to_email: str,
        subject: str,
        html_body: str,
        attachments: Optional[List[str]] = None,
    ):

        message = MIMEMultipart()

        message["to"] = to_email
        message["subject"] = subject

        message.attach(
            MIMEText(
                html_body,
                "html",
            )
        )

        # Attach files if provided
        if attachments:

            for file_path in attachments:

                with open(file_path, "rb") as file:

                    attachment = MIMEApplication(
                        file.read()
                    )

                    attachment.add_header(
                        "Content-Disposition",
                        "attachment",
                        filename=os.path.basename(file_path),
                    )

                    message.attach(
                        attachment
                    )

        raw = base64.urlsafe_b64encode(
            message.as_bytes()
        ).decode()

        response = self.service.users().messages().send(
           userId="me",
           body={"raw": raw},
        ).execute()

        return response


gmailService = GmailService()