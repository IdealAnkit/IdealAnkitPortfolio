---
id: 5
title: "Breast Cancer Detection using PyTorch"
date: "February 13, 2026"
category: "Deep Learning"
excerpt: "Building a Logistic Regression model completely from scratch using PyTorch to detect malignancy in breast cancer cells with 91% accuracy."
description: "Building a Logistic Regression model completely from scratch using PyTorch to detect malignancy in breast cancer cells with 91% accuracy."
image: "/blog-images/B05.png"
readTime: "8 min read"
---

# 🎗️ Breast Cancer Detection using PyTorch

**Building Logistic Regression from Scratch with Deep Learning**

In the world of Medical AI, understanding the "black box" is just as important as the accuracy itself. For this project, instead of relying on high-level APIs like `sklearn.LogisticRegression`, I decided to build a **Linear Binary Classification Model** completely from scratch using **PyTorch**.

This approach provides a deep dive into the underlying mathematics of neural networks, gradients, and optimization algorithms.

---

## 🎯 What Makes This Special?

*   **From-Scratch Implementation:** No pre-built model classes. Every layer, weight, and bias is manually defined.
*   **Manual Loss Calculation:** Implemented Binary Cross Entropy (BCE) loss mathematically, not just calling a library function.
*   **Transparent Workflow:** A clear view of how tensors flow through a neural network.
*   **High Accuracy:** Achieved **~91.23% accuracy** on the Wisconsin Diagnostic Breast Cancer dataset.

---

## 🚀 The Workflow

The pipeline follows a professional Machine Learning workflow, ensuring data integrity and model robustness.

```mermaid
graph LR;
    A[💾 Load Data] --> B[🧹 Cleaning];
    B --> C[✂️ Train-Test Split];
    C --> D[⚖️ Scaling];
    D --> E[🔤 Encoding];
    E --> F[🔥 PyTorch Tensors];
    F --> G[🧠 Training];
    G --> H[🎯 Prediction];
    style A fill:#ff6b6b,stroke:#333,stroke-width:2px,color:#fff
    style G fill:#a29bfe,stroke:#333,stroke-width:2px,color:#fff
```

### 1. Data Preprocessing

We use the **Wisconsin Diagnostic Breast Cancer (WDBC)** dataset. It contains **30 numerical features** computed from a digitized image of a fine needle aspirate (FNA) of a breast mass.

Key steps taken:
*   **Cleaning:** Dropped unnecessary columns like `id` and `Unnamed: 32`.
*   **Label Encoding:** Converted diagnoses (M = Malignant, B = Benign) into binary labels (`1` and `0`).
*   **Scaling:** Used `StandardScaler` to normalize features (Mean = 0, Variance = 1), crucial for gradient descent convergence.

### 2. PyTorch Tensors

Before training, we convert our NumPy arrays (CPU) into PyTorch Tensors (Potential GPU).

```python
# Convert to PyTorch Tensors
X_train_tensor = torch.from_numpy(X_train).float()
y_train_tensor = torch.from_numpy(y_train).float().view(-1, 1)

print(f"Features Shape: {X_train_tensor.shape}") 
# Output: torch.Size([455, 30])
```

---

## 🧠 The "From-Scratch" Model

Here is the core of the project. We define a class `MySimpleNN` that acts as our logistic regression unit.

It performs a simple linear transformation followed by a sigmoid activation:
$$z = Xw + b$$
$$\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}$$

```python
class MySimpleNN:
    def __init__(self, X):
        # Initialize weights randomly (30 features -> 1 output)
        self.weights = torch.randn(X.shape[1], 1, requires_grad=True)
        # Initialize bias to zero
        self.bias = torch.zeros(1, requires_grad=True)

    def forward(self, X):
        # Linear transformation
        z = torch.matmul(X, self.weights) + self.bias
        # Sigmoid activation
        return torch.sigmoid(z)
```

### Manual Loss Function (Binary Cross Entropy)

Instead of `nn.BCELoss`, we implement the math directly:
$$L = -\frac{1}{n}\sum [y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$$

```python
def loss_function(self, y_pred, y_true):
    epsilon = 1e-7 # Prevent log(0) error
    y_pred = torch.clamp(y_pred, epsilon, 1 - epsilon)
    
    loss = -(
        y_true * torch.log(y_pred) + 
        (1 - y_true) * torch.log(1 - y_pred)
    ).mean()
    return loss
```

---

## 📉 Training Loop

We train the model for **25 epochs** using a learning rate of **0.1**.

```python
# Training Loop
for epoch in range(epochs):
    # 1. Forward Pass
    y_pred = model.forward(X_train_tensor)

    # 2. Calculate Loss
    loss = model.loss_function(y_pred, y_train_tensor)

    # 3. Backpropagation
    loss.backward()

    # 4. Update Weights (Gradient Descent)
    with torch.no_grad():
        model.weights -= learning_rate * model.weights.grad
        model.bias -= learning_rate * model.bias.grad
        
        # Reset gradients for next iteration
        model.weights.grad.zero_()
        model.bias.grad.zero_()
```

---

## 📊 Results

After training, the model's performance on the unseen test set was evaluated.

*   **Test Accuracy:** `91.23%`
*   **Training Time:** Seconds (Very lightweight)
*   **Framework:** Pure PyTorch

> This project proves that you don't always need massive Convolutional Neural Networks (CNNs) for medical diagnosis. For tabular data effectively extracted from images, a well-tuned Logistic Regression model can be incredibly powerful and efficient.

### Future Improvements
*   Implement a **Confusion Matrix** to visualize False Positives vs. False Negatives.
*   Add **Early Stopping** to prevent overfitting if we increase epochs.
*   Experiment with a **Multi-Layer Perceptron (MLP)** to capture non-linear relationships.

[View Full Code on GitHub](https://github.com/IdealAnkit/breast-cancer-detection-pytorch)
