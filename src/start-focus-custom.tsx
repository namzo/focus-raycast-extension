import { ActionPanel, Color, Icon, List } from "@raycast/api";
import { getInstallStatus, startFocusCustom } from "./utils";

interface FocusArguments {
  hours?: number;
  minutes?: number;
}

// export default async function (props: LaunchProps<{ arguments: FocusArguments }>) {
//   const toast = new Toast({
//     title: "Starting focus",
//     style: Toast.Style.Animated,
//   });
//   toast.show();

//   const { hours, minutes } = props.arguments;

//   if (!(await getInstallStatus())) {
//     toast.title = "Focus is not installed";
//     toast.message = "Install Focus app from: https://heyfocus.com";
//     toast.style = Toast.Style.Failure;
//     return;
//   }

//   await startFocusCustom(hours, minutes);
// }

export default function Command() {
  return (
    <List navigationTitle="Change Dimming Intensity">
      <List.Item
        title="Set Intensity"
        subtitle="0-100%"
        icon={{ source: Icon.Dot, tintColor: Color.Blue }}
        actions={
          <ActionPanel title="Set Intensity">
            <ActionPanel.Submenu title="Percentage Values" icon={{ source: Icon.Text, tintColor: Color.PrimaryText }}>
              {intensities.map((i) => (
                <ActionPanel.Item
                  key={i.toString()}
                  title={i.toString()}
                  onAction={() => runAppleScriptSilentlyNoView(`tell application "HazeOver" to set intensity to ${i}`)}
                />
              ))}
            </ActionPanel.Submenu>
          </ActionPanel>
        }
      />
      <List.Item
        title="Increment Intensity"
        subtitle="+20%"
        icon={{ source: Icon.ChevronUp, tintColor: Color.Green }}
        keywords={["add", "plus", "higher", "more"]}
        actions={
          <ActionPanel title="Increment Intensity">
            <ActionPanel.Item
              icon={{ source: Icon.ChevronUp, tintColor: Color.Green }}
              title="Increment Intensity"
              onAction={() => incrementIntensity(20)}
            />
          </ActionPanel>
        }
      />
      <List.Item
        title="Decrement Intensity"
        subtitle="-20%"
        icon={{ source: Icon.ChevronDown, tintColor: Color.Red }}
        keywords={["subtract", "minus", "lower", "less"]}
        actions={
          <ActionPanel title="Decrement Intensity">
            <ActionPanel.Item
              icon={{ source: Icon.ChevronDown, tintColor: Color.Red }}
              title="Decrement Intensity"
              onAction={() => decrementIntensity(20)}
            />
          </ActionPanel>
        }
      />
    </List>
  );
}
