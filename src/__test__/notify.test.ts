import { notifyInfo, notifyErr, notifySuccess } from "../notify/notify";
describe("testing notify events", () => {
  test("should show success toast", () => {
    const toast = notifySuccess("success");
    expect(toast).toBeTruthy();
  });

  test("should show error toast", () => {
    const toast = notifyErr("Error");
    expect(toast).toBeTruthy();
  });

  test("should show info toast", () => {
    const toast = notifyInfo("Info");
    expect(toast).toBeTruthy();
  });
});
