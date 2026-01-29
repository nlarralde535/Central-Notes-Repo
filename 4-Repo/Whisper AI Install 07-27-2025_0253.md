---
tags:
  - Central-Notes-Repo/WhisperAI
aliases:
  - "Notes on installing OpenAI Whisper"
createdDate: "2025-07-27"
---

# Whisper AI README 
https://github.com/openai/whisper?tab=readme-ov-file

# Step 1: Install Dependencies
From the README we have this: 
```
We used Python 3.9.9 and [PyTorch](https://pytorch.org/) 1.10.1 to train and test our models, but the codebase is expected to be compatible with Python 3.8-3.11 and recent PyTorch versions. The codebase also depends on a few Python packages, most notably [OpenAI's tiktoken](https://github.com/openai/tiktoken) for their fast tokenizer implementation.
```
so we have to install 
 - Python version 3.11
 - the most recent PyTorch
 - OpenAI's Tiktoken

### ( I ) Installing Python 3.11
[Here's a link that might help](https://medium.com/@lupiel/installing-python-from-a-tgz-file-a-step-by-step-guide-4cf5f4a17a86)
1. download the `Gzipped source tarball` from [here](https://www.python.org/downloads/release/python-31113/) 
2. unzip the file 
3. follow the steps in the `README.rst`

**NOTE:** 
On our system, then we did this ^ python 3.12 was replaced with python 3.11, so we probably messed something up... 
```
nic@Fred:~$ which python
nic@Fred:~$ which python3
/usr/local/bin/python3
nic@Fred:~$ ls -l /usr/local/bin/python3
lrwxrwxrwx 1 root root 10 Jul 19  2025 /usr/local/bin/python3 -> python3.11
nic@Fred:~$ ls -H /usr/local/bin/python3
/usr/local/bin/python3
nic@Fred:~$ ls -l /usr/bin/python3
lrwxrwxrwx 1 root root 10 Nov 12 06:15 /usr/bin/python3 -> python3.12
nic@Fred:~$ ls -H /usr/bin/python3
/usr/bin/python3
```

### ( II ) Installing `pip`
```
sudo apt install pip
```

**NOTE:**
On our system, two (?) instances of `pip` got installed: `pip` and `pip3`
```
nic@Fred:~$ which pip
/usr/bin/pip
nic@Fred:~$ pip --version
pip 24.0 from /usr/lib/python3/dist-packages/pip (python 3.12)
nic@Fred:~$ 
nic@Fred:~$ which pip3
/usr/local/bin/pip3
nic@Fred:~$ pip3 --version
pip 24.0 from /usr/local/lib/python3.11/site-packages/pip (python 3.11)
nic@Fred:~$ 
```
and we installed all of the following dependencies AND Whisper using `pip3` because that one seems to point to/use system python (3.11), which is the version required for Whisper
```
nic@Fred:~$ which python3
/usr/local/bin/python3
nic@Fred:~$ python3 --version
Python 3.11.13
nic@Fred:~$ 
```

### ( III ) Installing PyTorch
1. follow the instructions [here](https://pytorch.org/get-started/locally/#linux-installation)
Added a new directory to the PATH variable as per these instructions 
```
~/.bashrc
==========

# Adding this directory to PATH
# as suggested by PyTorch install
# output
#
# https://pytorch.org/get-started/locally/#linux-installation
export PATH="/home/nic/.local/bin:$PATH"
```

### ( IV ) Installing Tiktoken
1. follow the steps [here](https://github.com/openai/tiktoken/blob/main/README.md)

---
# Step 2: Install Whisper

1. Run the pip command called for [here](https://github.com/openai/whisper?tab=readme-ov-file): 
   **NOTE:** We use `pip3` as noted above   
    ```
    pip3 install -U openai-whisper
    ```

---

# Step 3: Install `ffmpeg`

Also from the README:
```
It also requires the command-line tool [`ffmpeg`](https://ffmpeg.org/) to be installed on your system, which is available from most package managers:
```

Install via: 
```
sudo apt update && sudo apt install ffmpeg
```

Once installed we have: 
```
nic@Fred:~$ which ffmpeg
/usr/bin/ffmpeg
nic@Fred:~$ ffmpeg -version
ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
```
