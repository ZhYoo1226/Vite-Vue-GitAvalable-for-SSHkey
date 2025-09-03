import requests
import tarfile
import os


def download_and_extract(url, dest_path):
    # 确保目标路径存在
    os.makedirs(dest_path, exist_ok=True)
    
    # 获取文件名
    filename = url.split('/')[-1]
    file_path = os.path.join(dest_path, filename)
    
    # 下载数据集
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(file_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    
    # 解压数据集
    with tarfile.open(file_path, 'r:gz') as tar:
        tar.extractall(path=dest_path)
    
    # 删除压缩文件
    os.remove(file_path)

# 设置URL和目标路径
cifar10_url = 'https://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz'
destination_path = './cifar10'

# 执行下载和解压
download_and_extract(cifar10_url, destination_path)
print("CIFAR-10 dataset downloaded and extracted successfully.")
