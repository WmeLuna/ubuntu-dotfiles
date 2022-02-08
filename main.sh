#!/bin/bash
echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER > /dev/null 2>&1

sudo apt update
sudo apt install curl -y

#update script
bash -c "$(curl -sL https://wmeluna.com/ubuntu-maintenance)"
#remove snap
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/killsnap)" 
#theme
bash -c "$(curl -sL https://github.com/WmeLuna/Cyber/raw/main/nordic-theme.sh)"
#brave
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/brave)" 
#discord
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/fulldiscsetup)"
#vscode
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/vscode)" 
#lutris
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/lutris)"
#mc
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/mc)" 


