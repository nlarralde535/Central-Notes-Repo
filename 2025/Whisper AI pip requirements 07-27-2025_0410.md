---
tags:
  - Central-Notes-Repo/WhisperAI
aliases:
  - "Requirements dot txt file"
  - "Whisper AI pip requirements"
createdDate: "2025-07-27"
---

# Note: 
This list of Python requirement packages can be handed to `pip` and it will install then all automatically in the current environment.  Use `pip3 freeze` to see the list of currently installed packages.

This is the list of packages installed on our system once Whisper AI was fully installed

```
nic@Fred:~$ pip3 freeze
certifi==2025.7.14
charset-normalizer==3.4.2
filelock==3.13.1
fsspec==2024.6.1
idna==3.10
Jinja2==3.1.4
llvmlite==0.44.0
MarkupSafe==2.1.5
more-itertools==10.7.0
mpmath==1.3.0
networkx==3.3
numba==0.61.2
numpy==2.1.2
openai-whisper==20250625
pillow==11.0.0
regex==2024.11.6
requests==2.32.4
sympy==1.13.3
tiktoken==0.9.0
torch==2.7.1+cpu
torchaudio==2.7.1+cpu
torchvision==0.22.1+cpu
tqdm==4.67.1
triton==3.3.1
typing_extensions==4.12.2
urllib3==2.5.0
nic@Fred:~$ 

```

Notice `openai-whisper` and `torch` are present. 