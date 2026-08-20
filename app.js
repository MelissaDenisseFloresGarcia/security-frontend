const API_URL = "http://localhost:3000";
const API_KEY = "my-secret-key";

const responseBox = document.getElementById("response");
const responseStatus = document.getElementById("responseStatus");
const requestMethod = document.getElementById("requestMethod");
const requestEndpoint = document.getElementById("requestEndpoint");


function showResponse(method, endpoint, status, data) {

    requestMethod.textContent = method;

    requestMethod.className =
        "method " + method.toLowerCase();

    requestEndpoint.textContent = endpoint;

    responseStatus.textContent =
        status + " " + getStatusText(status);

    if (status >= 200 && status < 300) {

        responseStatus.style.color = "#15803d";
        responseStatus.style.background = "#dcfce7";

    } else {

        responseStatus.style.color = "#dc2626";
        responseStatus.style.background = "#fee2e2";

    }

    responseBox.textContent =
        JSON.stringify(data, null, 2);
}


function getStatusText(status) {

    const statuses = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        401: "Unauthorized",
        404: "Not Found",
        500: "Server Error"
    };

    return statuses[status] || "";
}


/* GET /health */

async function checkHealth() {

    try {

        const response =
            await fetch(`${API_URL}/health`);

        const data =
            await response.json();

        showResponse(
            "GET",
            "/health",
            response.status,
            data
        );

    } catch (error) {

        showResponse(
            "GET",
            "/health",
            500,
            {
                error: "Unable to connect to API"
            }
        );

    }

}


/* GET /api/data */

async function getData() {

    try {

        const response =
            await fetch(`${API_URL}/api/data`, {

                method: "GET",

                headers: {
                    "x-api-key": API_KEY
                }

            });

        const data =
            await response.json();

        showResponse(
            "GET",
            "/api/data",
            response.status,
            data
        );

    } catch (error) {

        showResponse(
            "GET",
            "/api/data",
            500,
            {
                error: "Unable to connect to API"
            }
        );

    }

}


/* POST /api/data */

async function sendPost() {

    try {

        const response =
            await fetch(`${API_URL}/api/data`, {

                method: "POST",

                headers: {
                    "x-api-key": API_KEY,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    message: "Security API test"
                })

            });

        const data =
            await response.json();

        showResponse(
            "POST",
            "/api/data",
            response.status,
            data
        );

    } catch (error) {

        showResponse(
            "POST",
            "/api/data",
            500,
            {
                error: "Unable to connect to API"
            }
        );

    }

}