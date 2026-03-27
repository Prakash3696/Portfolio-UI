<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS Headers - Allow requests from React app
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Only POST requests are accepted.'
    ]);
    exit();
}

// Get JSON input from request body
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Check if JSON is valid
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON format'
    ]);
    exit();
}

// Validate required fields
if (!isset($data['name']) || empty(trim($data['name']))) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Name is required'
    ]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8');

// Optional: Save to database
// Example database connection (uncomment and configure)
/*
$host = 'localhost';
$dbname = 'portfolio_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO contacts (name, created_at) VALUES (:name, NOW())");
    $stmt->execute(['name' => $name]);
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
    exit();
}
*/

// Optional: Send email notification
// Example email sending (uncomment and configure)
/*
$to = "your-email@example.com";
$subject = "New Contact from Portfolio";
$message = "Name: $name\nReceived at: " . date('Y-m-d H:i:s');
$headers = "From: noreply@yourwebsite.com";

if (mail($to, $subject, $message, $headers)) {
    // Email sent successfully
} else {
    // Email failed
}
*/

// Log the submission (optional)
$logFile = 'contacts.log';
$logEntry = date('Y-m-d H:i:s') . " - Name: $name\n";
file_put_contents($logFile, $logEntry, FILE_APPEND);

// Return success response
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => "Thank you, $name! Your message has been received successfully."
]);
?>