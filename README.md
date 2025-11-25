# Dynamic Visitor Counter 🔢

A dynamic visitor counter service for a static, **S3-hosted** website. This project uses **AWS Lambda**, **API Gateway**, and **DynamoDB** to track and display page visits in real-time. Designed for lightweight, serverless page-count tracking without hosting a backend.

## 🚀 Features

- **Dynamic page-visit tracking** - Each page hit increments a counter stored in DynamoDB.

- **Serverless architecture** - Powered by AWS Lambda and API Gateway, with no servers to manage.

- **Easy to integrate** - Add a simple JavaScript snippet to any S3-hosted static website.

- **Scalable & cost-efficient** - Utilizes AWS’s pay-as-you-go model and scales automatically.

## 🏗️ Architecture Overview

```
     Client        (Static Website on S3)
        |
        V
   API Gateway     (REST Endpoint)
        |
        V
  Lambda Function  (Node.js / Python)
        |
        V
   DynamoDB Table  (Stores visit counts)
```

- Each visit triggers the API Gateway endpoint → Lambda updates or retrieves the count → Lambda returns the new count → The front-end displays it.

## 📦 Setup Instructions

1. Create the DynamoDB Table
2. Deploy the Lambda Function
3. Configure API Gateway
4. Add the script to your S3 Website

-> Refer to the full documentation for detailed implementation steps.

📄Documentation: [documentation.pdf](https://github.com/user-attachments/files/23709509/documentation.pdf)

## 📊 Example Output

```json
{
  "count": 10
}
```

## 🌐 Live Page URL

Livepage URL: [Dynamic Visitor Counter Live Page](http://s3-dynamic-visitor-counter.s3-website.ap-south-1.amazonaws.com)

## 🎥 Preview

![Image](https://github.com/user-attachments/assets/736cf6bb-d5f9-437d-a528-24481c20ad62)
