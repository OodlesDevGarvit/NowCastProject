package com.mobileapp;

import android.os.Build;
import android.os.Bundle; // here
import androidx.annotation.Nullable;
import com.google.android.gms.cast.framework.CastContext;
import android.view.WindowManager;

import androidx.appcompat.app.AppCompatDelegate;

import com.facebook.react.ReactActivity;
import com.reactnativepipandroid.PipAndroidModule;
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
    protected String getMainComponentName() {
      return "MobileApp";
  }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this,true,true);  // here
        super.onCreate(savedInstanceState);
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
    }

    @Override
  public void invokeDefaultOnBackPressed() {
    moveTaskToBack(true);
  }

}
