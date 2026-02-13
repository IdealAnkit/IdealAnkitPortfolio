const r=`---\r
id: 5\r
title: "Breast Cancer Detection using PyTorch"\r
date: "February 13, 2026"\r
category: "Deep Learning"\r
excerpt: "Building a Logistic Regression model completely from scratch using PyTorch to detect malignancy in breast cancer cells with 91% accuracy."\r
description: "Building a Logistic Regression model completely from scratch using PyTorch to detect malignancy in breast cancer cells with 91% accuracy."\r
image: "/blog-images/B05.png"\r
readTime: "8 min read"\r
---\r
\r
# 🎗️ Breast Cancer Detection using PyTorch\r
\r
**Building Logistic Regression from Scratch with Deep Learning**\r
\r
In the world of Medical AI, understanding the "black box" is just as important as the accuracy itself. For this project, instead of relying on high-level APIs like \`sklearn.LogisticRegression\`, I decided to build a **Linear Binary Classification Model** completely from scratch using **PyTorch**.\r
\r
This approach provides a deep dive into the underlying mathematics of neural networks, gradients, and optimization algorithms.\r
\r
---\r
\r
## 🎯 What Makes This Special?\r
\r
*   **From-Scratch Implementation:** No pre-built model classes. Every layer, weight, and bias is manually defined.\r
*   **Manual Loss Calculation:** Implemented Binary Cross Entropy (BCE) loss mathematically, not just calling a library function.\r
*   **Transparent Workflow:** A clear view of how tensors flow through a neural network.\r
*   **High Accuracy:** Achieved **~91.23% accuracy** on the Wisconsin Diagnostic Breast Cancer dataset.\r
\r
---\r
\r
## 🚀 The Workflow\r
\r
The pipeline follows a professional Machine Learning workflow, ensuring data integrity and model robustness.\r
\r
\`\`\`mermaid\r
graph LR;\r
    A[💾 Load Data] --> B[🧹 Cleaning];\r
    B --> C[✂️ Train-Test Split];\r
    C --> D[⚖️ Scaling];\r
    D --> E[🔤 Encoding];\r
    E --> F[🔥 PyTorch Tensors];\r
    F --> G[🧠 Training];\r
    G --> H[🎯 Prediction];\r
    style A fill:#ff6b6b,stroke:#333,stroke-width:2px,color:#fff\r
    style G fill:#a29bfe,stroke:#333,stroke-width:2px,color:#fff\r
\`\`\`\r
\r
### 1. Data Preprocessing\r
\r
We use the **Wisconsin Diagnostic Breast Cancer (WDBC)** dataset. It contains **30 numerical features** computed from a digitized image of a fine needle aspirate (FNA) of a breast mass.\r
\r
Key steps taken:\r
*   **Cleaning:** Dropped unnecessary columns like \`id\` and \`Unnamed: 32\`.\r
*   **Label Encoding:** Converted diagnoses (M = Malignant, B = Benign) into binary labels (\`1\` and \`0\`).\r
*   **Scaling:** Used \`StandardScaler\` to normalize features (Mean = 0, Variance = 1), crucial for gradient descent convergence.\r
\r
### 2. PyTorch Tensors\r
\r
Before training, we convert our NumPy arrays (CPU) into PyTorch Tensors (Potential GPU).\r
\r
\`\`\`python\r
# Convert to PyTorch Tensors\r
X_train_tensor = torch.from_numpy(X_train).float()\r
y_train_tensor = torch.from_numpy(y_train).float().view(-1, 1)\r
\r
print(f"Features Shape: {X_train_tensor.shape}") \r
# Output: torch.Size([455, 30])\r
\`\`\`\r
\r
---\r
\r
## 🧠 The "From-Scratch" Model\r
\r
Here is the core of the project. We define a class \`MySimpleNN\` that acts as our logistic regression unit.\r
\r
It performs a simple linear transformation followed by a sigmoid activation:\r
$$z = Xw + b$$\r
$$\\hat{y} = \\sigma(z) = \\frac{1}{1 + e^{-z}}$$\r
\r
\`\`\`python\r
class MySimpleNN:\r
    def __init__(self, X):\r
        # Initialize weights randomly (30 features -> 1 output)\r
        self.weights = torch.randn(X.shape[1], 1, requires_grad=True)\r
        # Initialize bias to zero\r
        self.bias = torch.zeros(1, requires_grad=True)\r
\r
    def forward(self, X):\r
        # Linear transformation\r
        z = torch.matmul(X, self.weights) + self.bias\r
        # Sigmoid activation\r
        return torch.sigmoid(z)\r
\`\`\`\r
\r
### Manual Loss Function (Binary Cross Entropy)\r
\r
Instead of \`nn.BCELoss\`, we implement the math directly:\r
$$L = -\\frac{1}{n}\\sum [y \\log(\\hat{y}) + (1-y) \\log(1-\\hat{y})]$$\r
\r
\`\`\`python\r
def loss_function(self, y_pred, y_true):\r
    epsilon = 1e-7 # Prevent log(0) error\r
    y_pred = torch.clamp(y_pred, epsilon, 1 - epsilon)\r
    \r
    loss = -(\r
        y_true * torch.log(y_pred) + \r
        (1 - y_true) * torch.log(1 - y_pred)\r
    ).mean()\r
    return loss\r
\`\`\`\r
\r
---\r
\r
## 📉 Training Loop\r
\r
We train the model for **25 epochs** using a learning rate of **0.1**.\r
\r
\`\`\`python\r
# Training Loop\r
for epoch in range(epochs):\r
    # 1. Forward Pass\r
    y_pred = model.forward(X_train_tensor)\r
\r
    # 2. Calculate Loss\r
    loss = model.loss_function(y_pred, y_train_tensor)\r
\r
    # 3. Backpropagation\r
    loss.backward()\r
\r
    # 4. Update Weights (Gradient Descent)\r
    with torch.no_grad():\r
        model.weights -= learning_rate * model.weights.grad\r
        model.bias -= learning_rate * model.bias.grad\r
        \r
        # Reset gradients for next iteration\r
        model.weights.grad.zero_()\r
        model.bias.grad.zero_()\r
\`\`\`\r
\r
---\r
\r
## 📊 Results\r
\r
After training, the model's performance on the unseen test set was evaluated.\r
\r
*   **Test Accuracy:** \`91.23%\`\r
*   **Training Time:** Seconds (Very lightweight)\r
*   **Framework:** Pure PyTorch\r
\r
> This project proves that you don't always need massive Convolutional Neural Networks (CNNs) for medical diagnosis. For tabular data effectively extracted from images, a well-tuned Logistic Regression model can be incredibly powerful and efficient.\r
\r
### Future Improvements\r
*   Implement a **Confusion Matrix** to visualize False Positives vs. False Negatives.\r
*   Add **Early Stopping** to prevent overfitting if we increase epochs.\r
*   Experiment with a **Multi-Layer Perceptron (MLP)** to capture non-linear relationships.\r
\r
[View Full Code on GitHub](https://github.com/IdealAnkit/breast-cancer-detection-pytorch)\r
`;export{r as default};
