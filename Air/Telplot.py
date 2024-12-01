import matplotlib.pyplot as plt

plt.style.use("seaborn-v0_8-whitegrid")

class Telplot:
  """
  Helper Plot on Time Series Case
  """
  def __init__(self, train, test, logits):
    self.test = test
    self.logits = logits
    self.train = train

  @property
  def Relplot(self):
    fig, axes = plt.subplots(1, 2, constrained_layout=True, figsize=(12, 6))

    axes[0].plot(self.train, label="Train")
    axes[0].plot(self.test, label="Test")
    axes[0].plot(self.logits, label="Result")
    axes[0].set_title("Overall Result on Forecasting")
    axes[0].legend()

    axes[1].plot(self.test, label="Test")
    axes[1].plot(self.logits, label="Result")
    axes[1].set_title("Detail Result on Forecasting")
    axes[1].legend()

    plt.tight_layout();
