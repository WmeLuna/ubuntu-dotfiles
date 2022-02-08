#!/bin/bash
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
#vscode
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/vscode)" 
#lutris
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/lutris)"
#mc
bash -c "$(curl -sL https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/mc)" 


