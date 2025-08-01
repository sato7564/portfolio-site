@echo off
echo Creating FTP script...

echo open ftp.lolipop.jp > ftp_script.txt
echo admin >> ftp_script.txt
echo oka_recruit >> ftp_script.txt
echo cd web >> ftp_script.txt
echo bin >> ftp_script.txt
echo put dist\index.html >> ftp_script.txt
echo cd assets >> ftp_script.txt
echo mput dist\assets\*.* >> ftp_script.txt
echo cd .. >> ftp_script.txt
echo mkdir images >> ftp_script.txt
echo cd images >> ftp_script.txt
echo lcd dist\images >> ftp_script.txt
echo mput *.* >> ftp_script.txt
echo quit >> ftp_script.txt

echo Executing FTP upload...
ftp -s:ftp_script.txt

echo Cleaning up...
del ftp_script.txt

echo Upload completed!
pause