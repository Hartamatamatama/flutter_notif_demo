from firebase_admin import credentials
import google.auth.transport.requests
import google.oauth2.service_account

SCOPES = ['https://www.googleapis.com/auth/firebase.messaging']

# Pastikan nama file json sesuai dengan yang kamu download
credentials = google.oauth2.service_account.Credentials.from_service_account_file(
    "service-account.json",
    scopes=SCOPES
)

request = google.auth.transport.requests.Request()
credentials.refresh(request)
print(credentials.token)