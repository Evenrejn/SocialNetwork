import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import React from "react";


describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Test status");
  });
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <input> should't be displayed", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    //let span = root.findByType("input");
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });
  test("after creation <span> should be contains correct status", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Test status");
  });
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Test status" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("Test status");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="Test status" updateStatus={mockCallback} />);
    let instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});