package com.top;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by toplinker on 2018/4/3.
 */
public class build {

    public static void main(String[] args){
        System.out.println("start selenium");
//        System.setProperty("webdriver.gecko.driver", "F:\\Mozzie\\geckodriver-v0.20.0-win64\\geckodriver.exe");
//        WebDriver driver = new FirefoxDriver();
//        driver.manage().window().maximize();
        System.setProperty("webdriver.chrome.driver", "F:\\Mozzie\\chromedriver_win32\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("http://www.baidu.com/");
        driver.findElement(By.id("kw")).sendKeys("selenium java");
        driver.findElement(By.id("su")).click();
//        driver.close();
    }
}
